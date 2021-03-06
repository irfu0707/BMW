import { CardItems } from 'cx-portal-shared-components'
import { HttpClient } from 'utils/HttpClient'

export class NewsApi extends HttpClient {
  private static classInstance?: NewsApi

  public constructor() {
    super(process.env.REACT_APP_BASE_ASSETS || '')
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new NewsApi()
    }
    return this.classInstance
  }

  public getItems = () => {
    return this.instance.get<CardItems[]>(`/api/news/latest.json`)
  }
}
