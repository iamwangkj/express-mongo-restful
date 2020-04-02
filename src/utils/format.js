const formatRes = (msg, data) => {
  return {
    msg: msg || 'ok',
    data: data || null
  }
}

module.exports = {
  formatRes
}
