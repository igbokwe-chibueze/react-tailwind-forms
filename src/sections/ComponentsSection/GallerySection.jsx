import { images } from "../../constants/Data"

const GallerySection = () => {
  return (
    <section className="min-h-screen">
      <div className= "max-w-screen-xl mx-auto px-2 lg:px-12 py-8 lg:py-16 space-y-8">

        {/* Bento Grid */}
        <div 
          className="max-w-screen-md mx-auto rounded-xl border-2 border-gray-200"
        >
          {/* Header */}
          <div 
            className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
          >
            <h1 className=" header-one ">Bento Grid</h1>
            <h2 className=" header-two ">
              This type of grid typically features a mix of larger and smaller cells, but the overall structure is more regular and grid-like, 
              with fixed row heights and column widths. This layout can be particularly effective for creating visually interesting and 
              balanced compositions where the emphasis is on uniformity and order.
            </h2>
          </div>

          <div className=" py-4 lg:py-8 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  //Conditionally applies classes to span 2 columns and 2 rows for the first and every fifth item.
                  className={`${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
                >
                  <img src={image.src} alt={image.alt} className="object-cover w-full h-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Masonry Grid */}
        <div 
          className=" max-w-screen-md mx-auto rounded-xl border-2 border-gray-200 "
        >
          {/* Header */}
          <div 
            className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
          >
            <h1 className=" header-one ">Masonry Grid</h1>
            <h2 className=" header-two ">
              A masonry grid layout is often used for displaying images, cards, or other content blocks in a way that optimizes the use of space 
              by minimizing gaps between items. The items are arranged in columns, but the rows are not fixed in height, 
              so items can span multiple rows. This creates a staggered appearance where items can be of varying heights and widths, 
              similar to the way bricks are laid in a wall.
            </h2>
          </div>

          <div className=" py-4 lg:py-8 ">
            <div className="columns-2 md:columns-4 gap-4 p-4">
              {images.map((image, index) => (
                <div key={index} 
                  className="mb-4"
                >
                  <img src={image.src} alt={image.alt} className="w-full h-auto object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Featured Image */}
        <div 
          className=" max-w-screen-md mx-auto rounded-xl border-2 border-gray-200 "
        >
          {/* Header */}
          <div 
            className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
          >
            <h1 className=" header-one ">Featured Image</h1>
            <h2 className=" header-two ">
              This example can be used to feature the most important image and show a row of five pictures below.
            </h2>
          </div>

          <div className=" py-4 lg:py-8 ">

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
              {/* One image takes the entire top row */}
              <div className="col-span-2 md:col-span-5">
                <img src={images[6].src} alt={images[6].alt} className="object-cover w-full h-full rounded-lg" />
              </div>
              
              {/* Next five images take the bottom row (starts from the image in index 1 to the image just before index 6)*/}
              {images.slice(1, 6).map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <img src={image.src} alt={image.alt} className="object-cover w-full h-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Bento Grid 2*/}
        <div 
          className="max-w-screen-md mx-auto rounded-xl border-2 border-gray-200"
        >
          {/* Header */}
          <div 
            className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
          >
            <h1 className=" header-one ">Bento Grid 2</h1>
            <h2 className=" header-two ">
              This implementation creates a Bento grid layout where images at index 4 and index 9 span two columns. 
              The rest of the images take up one column each.
            </h2>
          </div>

          <div className=" py-4 lg:py-8 ">
            {/* "auto-rows-[200px]" ensures the rows keep a height of 200px */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 p-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  //Conditionally applies classes to make index 4 and index 9 span two columns.
                  className={`${index === 4 || index === 9 ? 'col-span-2' : ''}`}
                >
                  <img src={image.src} alt={image.alt} className="object-cover w-full h-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Bento Grid 3*/}
        <div 
          className="max-w-screen-md mx-auto rounded-xl border-2 border-gray-200"
        >
          {/* Header */}
          <div 
            className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
          >
            <h1 className=" header-one ">Bento Grid 3</h1>
            <h2 className=" header-two ">
              This implementation creates a Bento grid layout where images at index 0, 4, 8, and index 9 span two columns. 
              The rest of the images take up one column each. Index 4 also spans two rows.
            </h2>
          </div>

          <div className=" py-4 lg:py-8 ">
            {/* "auto-rows-[200px]" ensures the rows keep a height of 200px */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 p-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0 || index === 4 || index === 8 || index === 9 ? 'md:col-span-2' : ''
                  } ${index === 4 ? 'md:row-span-2' : ''}`}
                >
                  <img src={image.src} alt={image.alt} className="object-cover w-full h-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Masonry Grid 2*/}
        <div 
          className=" max-w-screen-md mx-auto rounded-xl border-2 border-gray-200 "
        >
          {/* Header */}
          <div 
            className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
          >
            <h1 className=" header-one ">Masonry Grid 2</h1>
            <h2 className=" header-two ">
              Adjusting the height of some content or using content of different height, 
              provides a visually dynamic and appealing layout that effectively utilizes space. 
            </h2>
          </div>

          <div className=" py-4 lg:py-8 ">
            <div className="columns-2 md:columns-3 gap-4 p-4">
              {images.map((image, index) => (
                <div key={index} 
                  className="mb-4"
                >
                  <img src={image.src} alt={image.alt} 
                    className={`w-full object-cover rounded-lg ${index === 0 || index === 3 || index == 8 ? 'h-24 md:h-28' : 'h-auto'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Bento Grid 4*/}
        <div 
          className="max-w-screen-md mx-auto rounded-xl border-2 border-gray-200"
        >
          {/* Header */}
          <div 
            className=" w-full px-4 lg:px-12 py-4 lg:py-8 space-y-2 bg-gray-300 dark:bg-gray-800 rounded-t-lg"
          >
            <h1 className=" header-one ">Bento Grid 4</h1>
            <h2 className=" header-two ">
              Use this for implementing a very dynamic bento grid
            </h2>
          </div>

          <div className=" py-4 lg:py-8 ">
            <div className="grid min-[375px]:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 min-[375px]:p-8 p-4 text-gray-900 dark:text-white">
              {/* 
                - The header on extra small "min-[375px]" takes the entire two columns available "min-[375px]:col-span-2", 
                - Still on extra small the header is further divided into a grid of two columns "min-[375px]:grid min-[375px]:grid-cols-2", 
                  which would automatically place the text in one column.
                - On meduim screen the header spans three out of the four columns available "md:col-span-3".
                - Still on meduim the header is further divided into three a grid of three cols "md:grid-cols-3".
              */}
              <h1 className="text-4xl font-extrabold min-[375px]:col-span-2 min-[375px]:grid min-[375px]:grid-cols-2 min-[375px]:gap-4 
                md:col-span-3 md:grid-cols-3 md:text-5xl lg:text-6xl"
              >
                {/* On meduim the header spans three out of four cols and is further divided into a grid of three col. 
                The <span> should only take two cols. */}
                <span className="md:col-span-2">Meet our awesome team.</span>
              </h1>
              
              {/* 
                - On extra small start the <p> on the second row and the second column "min-[375px]:row-start-2 min-[375px]:col-start-2". 
                  Without this it would stay on the left side which is column one. 
                  Note since its taking only one col and one row, and there are two col on extra small, the images would pop up to fil the next col
                - On meduim start it on the first column "md:col-start-1" but now span two columns "md:col-span-2".
               */}
              <p className="min-[375px]:row-start-2 min-[375px]:col-start-2 
                md:col-start-1 md:col-span-2 md:pr-12 min-[375px]:self-center md:text-lg"
              >
                The Creativa team is made up of seasoned professionals with several years of experince.
              </p>
              
              {images.slice(0, 8).map((image, index) => (
                <div
                  key={index}
                  className={`mb-4 ${ index === 3 ? 'md:col-start-2' : ''}`} // start the item on the third index from the second column.
                >
                  <img src={image.src} alt={image.alt} className="object-cover w-full h-full rounded-lg" />
                  <p>{image.alt}</p>
                </div>
              ))}
              <p className="self-center md:text-lg md:col-span-2 md:text-center">
                Creativa team excels in delivering results, ensuring top-notch quality, and innovation..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection