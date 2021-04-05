export function _message(that, message = '此语句为默认消息展示', type = '') {
  that.$message({
    showClose: true,
    message,
    type,
    center: true,
  })
}

/*
 type = '' | success | warning | error
 */
