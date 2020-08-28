export function currentPageState(currentPage, contactsPerPage, data) {
  const indexOfLastPost = currentPage * contactsPerPage
  const indexOfFirstPost = indexOfLastPost - contactsPerPage
  const currentContacts = data.slice(indexOfFirstPost, indexOfLastPost)
  const totalPage = Math.ceil(data.length / contactsPerPage)
  return { currentContacts, totalPage }
}
