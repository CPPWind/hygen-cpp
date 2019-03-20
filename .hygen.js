const sourcePaths = {
  components: 'src/components/',
  concerns: 'src/concerns/',
  examples: 'src/examples/',
  pages: 'src/pages/',
  panes: 'src/panes/',
}

const extRegex = /^\./

const pathTo = (source, ...parts) => {
  if (parts.slice(-1)[0].match(extRegex)) {
    const ext = parts.pop()
    parts[parts.length - 1] = parts[parts.length - 1] + ext
  }
  return sourcePaths[source] + parts.join('/')
}

module.exports = {
  helpers: {
    src: pathTo,
  }
}
