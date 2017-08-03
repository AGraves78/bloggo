function PostDataResolve(PostService){
  return PostService.get();
}
PostDataResolve.$inject = ['posts'];

module.exports = PostDataResolve;
