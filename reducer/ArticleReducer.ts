let initState = {
    articles: [
        {
            petImg: '/dog_5.jpg',
            added_at: "2017-01-25"
        },
        {
            petImg: '/dog_.jpg',
            added_at: "2017-01-26"
        },
        {
            petImg: '/dog_2.jpg',
            added_at: "2017-01-10"
        },
        {
            petImg: '/dog_3.jpg',
            added_at: "2017-01-30"
        }
    ]
}

const ArticleReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export default ArticleReducer