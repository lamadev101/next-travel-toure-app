
const BookNowForm = () => {
  return (
    <section>
      <div className=" bg-neutral-900 py-2 font-bold flex items-center justify-between text-white">
        <h1>Book This Tour</h1>
        <span>$79 Per Person</span>
      </div>
      <form action="">
          <div>
            <input type="text" placeholder="Full Name" className="focus:ring-1 rounded-2xl h-[30px]" />
          </div>

        <button type="submit">BooK Now</button>
      </form>
    </section>
  )
}

export default BookNowForm