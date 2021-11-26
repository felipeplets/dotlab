# BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
BASE_DIR=$(dirname "$0")
source ${BASE_DIR}/git/loader.sh
source ${BASE_DIR}/npm/loader.sh
source ${BASE_DIR}/rake/loader.sh