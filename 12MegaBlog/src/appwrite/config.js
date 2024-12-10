import conf from '../conf/conf'
import { Databases , Storage, ID, Client,Query} from 'appwrite'

export class Service{
  client = new Client()
  databases;
  bucket;

  constructor(){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
      this.databases = new Databases(this.client)
      this.bucket = new Storage(this.client)
  }

  async createPost ({title ,slug ,content,featuredImage ,status ,userId}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } catch (error) {
      console.log("Appwrite service :: createPost :: error",error);
    }
  }

  async updatePost (slug , {title , content,featuredImage ,status}){
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {
      console.log("Appwrite services :: updatePost :: error",error);
    }
  }
}
const service = new Service()

export default service

// slug, also known as a URL slug, is descriptive text after the website name at the end of a URL that identifies a web page on the domain. It typically contains keywords and phrases separated by hyphens, helping users and search engines understand the subject or content of a page.