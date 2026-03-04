#!/usr/bin/env bash
set -euo pipefail

mode="${1:---staged}"
if [[ "$mode" != "--staged" && "$mode" != "--all" ]]; then
  echo "Usage: $0 [--staged|--all]" >&2
  exit 2
fi

if [[ "$mode" == "--staged" ]]; then
  file_list="$(git diff --cached --name-only --diff-filter=ACMRTUXB || true)"
else
  file_list="$(git ls-files || true)"
fi

if [[ -z "${file_list//[$'\n\r\t ']}" ]]; then
  exit 0
fi

disallowed_file_regex='(\.pem$|\.key$|\.p12$|\.pfx$|\.jks$|\.keystore$|\.mobileprovision$|\.doc$|\.docx$|\.xls$|\.xlsx$|\.ppt$|\.pptx$)'

declare -a regex_rules=(
  '/Users/[A-Za-z0-9._/-]+'
  '/home/[A-Za-z0-9._/-]+'
  'C:\\Users\\'
  'AKIA[0-9A-Z]{16}'
  'ASIA[0-9A-Z]{16}'
  'ghp_[A-Za-z0-9]{20,}'
  'github_pat_[A-Za-z0-9_]{20,}'
  'sk-[A-Za-z0-9]{20,}'
  'xox[baprs]-[A-Za-z0-9-]{10,}'
  '-----BEGIN (RSA|OPENSSH|EC|DSA|PRIVATE) KEY-----'
  '([A-Za-z_][A-Za-z0-9_]*(api[_-]?key|token|secret|password)[A-Za-z0-9_]*)\s*[:=]\s*["'\''][^"'\'']{12,}["'\'']'
)

has_error=0

while IFS= read -r file; do
  [[ -n "$file" ]] || continue
  [[ -f "$file" ]] || continue

  case "$file" in
    scripts/privacy_scan.sh)
      continue
      ;;
  esac

  if [[ "$file" =~ $disallowed_file_regex ]]; then
    echo "[privacy-scan] blocked file type: $file"
    has_error=1
  fi

  for pattern in "${regex_rules[@]}"; do
    # Ignore binary files; scan only text-like content.
    if matches="$(rg --no-heading --line-number --color=never --pcre2 "$pattern" "$file" 2>/dev/null || true)"; then
      if [[ -n "$matches" ]]; then
        echo "[privacy-scan] sensitive content in $file"
        echo "$matches"
        has_error=1
      fi
    fi
  done
done <<< "$file_list"

if [[ "$has_error" -ne 0 ]]; then
  cat <<'MSG'
[privacy-scan] Commit blocked.
Remove sensitive content (absolute paths, tokens, keys, private docs) and retry.
MSG
  exit 1
fi

exit 0
