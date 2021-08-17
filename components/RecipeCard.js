function RecipeCard({ date, image, title }) {
  let { file, description } = image

  return (
    <div className="recipe-card">
      <img alt={description} src={`https:${file.url}`} />
      <h2>{title}</h2>
      <div>{description}</div>

      <style jsx>{`
        .recipe-card {
          margin: 10px;
          width: 300px;
          cursor: pointer;
        }
        img {
          height: 300px;
          width: 300px;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}

export default RecipeCard
