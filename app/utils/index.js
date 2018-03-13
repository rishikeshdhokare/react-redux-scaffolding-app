export const companies            = ["Google", "Apple", "Facebook", "IBM", "Cisco", "Intel", "Amazon", "ThoughtWorks"]
export const getRandomCompanyName = () => companies[Math.floor(Math.random() * (companies.length - 1)) + 1]
