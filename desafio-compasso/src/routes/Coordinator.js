export const goToHome = (history) => {
  history.push("/")
}

export const goToRepos = (history, user) => {
  history.push(`/repositorios/${user}`)
}

export const goToStar = (history, user) => {
  history.push(`/starred/${user}`)
}