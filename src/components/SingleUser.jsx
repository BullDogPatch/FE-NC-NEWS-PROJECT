function SingleUser({ user }) {
  const backUpImage = user.avatar_url
    ? undefined
    : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'

  return (
    <div className="user-grid" key={user.username}>
      <h3>{user.username}</h3>
      <p>{user.name}</p>
      <img src={user.avatar_url ?? backUpImage} alt={user.username} />
    </div>
  )
}

export default SingleUser
