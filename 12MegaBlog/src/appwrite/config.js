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

  async deletepost (slug){
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;

    } catch (error) {
      console.log("Appwrite services :: deletePost :: error",error);
      return false;
    }
  }

  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log("Appwrite services :: getPost :: error",error);
      return false
    }
  }

  async getPosts(queries = [Query.equal("status","active")]){
    try {
      return await this.databases.listDocuments(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        queries,
      )
    } catch (error) {
      console.log("Appwrite services :: getPosts :: error",error);
      return false
    }
  }

  // file upload service

  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Appwrite services :: uploadFile :: error",error);
      return false
    }
  }

  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true

    } catch (error) {
      console.log("Appwrite services :: deleteFile :: error",error);
      return false
    }
  }

  getFilePreview (fileId){
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}
const service = new Service()

export default service

// slug, also known as a URL slug, is descriptive text after the website name at the end of a URL that identifies a web page on the domain. It typically contains keywords and phrases separated by hyphens, helping users and search engines understand the subject or content of a page.

// Pagination is the process of dividing content into pages, either in print or digitally.