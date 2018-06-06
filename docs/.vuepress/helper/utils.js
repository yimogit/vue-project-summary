const fs = require('fs')
const join = require('path').join

module.exports = {
  /**
   * 获取目录下所有文件
   * @param {String} startPath
   */
  findSyncFolderName(startPath) {
    let result = []
    function finder(path, parentDir) {
      parentDir = parentDir || ''
      const files = fs.readdirSync(path)
      files.forEach((fileName, index) => {
        const fPath = join(path, fileName)
        const stats = fs.statSync(fPath)
        if (stats.isDirectory()) finder(fPath, fileName)
        if (stats.isFile()) {
          result.push('/' + (parentDir ? parentDir + '/' : '') + fileName)
          // result.push(fileName)
        }
      })
    }
    finder(startPath)
    return result
    // .filter(
    //   item => item.indexOf('/') === -1 || item.indexOf('README.md') > 0
    // )
  },

  /*
    @desc: Generate Sidebar Config
    @param: {tille, relativePath}
    @date: 2018-05-25
  */
  genSidebarConfig(title, relativePath = '', isWithReadMe = false) {
    const fileNameList = this.findSyncFolderName(relativePath).filter(
      e => e.toLocaleLowerCase().indexOf('readme.md') > 1
    )
    var prefix = ''
    var result = fileNameList.reduce((arrs, item) => {
      var arr = item.split('/')
      if (arr.length > 2) 
        arrs.push(prefix + arr[1]+'/')
      else
        arrs.push(prefix + arr[1])
      return arrs
    }, [])
    result = isWithReadMe ? [''].concat(result) : result
    // console.log(result)
    return [
      {
        title,
        collapsable: false,
        children: result
      }
    ]
    // let sidebarConfig = fileNameList
    //   .map(item => {
    //     return item
    //       .replace('/README.md', '/')
    //       .replace('README.md', '')
    //       .replace('.md', '')
    //   })
    //   .filter(e => e !== '')
    // sidebarConfig = isWithReadMe ? [''].concat(sidebarConfig) : sidebarConfig
    // console.log(sidebarConfig)
    // return [
    //   {
    //     title,
    //     collapsable: false,
    //     children: result
    //   }
    // ]
  }
}
