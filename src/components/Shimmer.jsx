const Shimmer = () => {
    return (

        <div className="body">
            <div className="filter-search">
            <input type="text" className="w-full py-2 px-4 pl-10 border text-gray-900 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"
                 placeholder="Search"/>
            <button id="filter-btn"  className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-[1180px] mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
                 >Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="rest-card" key={index}>
                        <div className="res-img-shimmer"></div>
                        <div className="text-shimmer"></div>
                        <div className="text-shimmer"></div>
                    </div>))}


            </div>
        </div>
    )
}
export default Shimmer;