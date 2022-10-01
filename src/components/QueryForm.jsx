function QueryForm({ setOrder, setSortBy, sortBy, order }) {
  return (
    <>
      <div className="sort-container">
        <label htmlFor="sort_by">Sort: </label>
        <select
          id="sort_by"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label htmlFor="order">By: </label>
        <select
          id="order"
          value={order}
          onChange={e => setOrder(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </>
  )
}

export default QueryForm
