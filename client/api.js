import request from 'superagent'

const portfolioUrl = '/api/v1/portfolio/'

export function getPortfolio () {
  return request
    .get(portfolioUrl)
    .then(response => response.body)
}
