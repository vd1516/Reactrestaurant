import React from 'react'
import Header from '../common/header'
import CoverSec from './coversec'
import ImageGallery from './imagegallery'
import Review from './review'
import Footer from '../common/footer'

export default function About() {
  return (
    <>
      <Header />

      {/* About Background Section */}
      <CoverSec menu={'about'} />

      {/* About Second Section */}
      <section className='about-content-sec mt-5'>
        <div className="container p-0">
          <p className='poppins-regular'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores necessitatibus
            quaerat non, explicabo consectetur laudantium vel dicta consequatur eum quo aspernatur officia?
            Tempore doloribus enim quas nam aspernatur est nostrum sint facere iste nesciunt nemo explicabo,
            vitae aut impedit, voluptatem reiciendis corrupti similique laudantium! Quaerat itaque ipsum quo
            eaque?</p>

          <p className='poppins-regular mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus recusandae ducimus
            saepe consequuntur velit dolorem similique assumenda, asperiores voluptatum vel modi minima omnis
            a quia quo molestiae. Incidunt cumque ea odit optio, iusto voluptas ratione vitae obcaecati
            temporibus fuga minima provident aut quasi autem expedita quia dolores at placeat perferendis.
            Nisi qui earum inventore soluta explicabo, labore ut ea nemo reprehenderit minus repellat, impedit
            atque vel debitis autem veritatis optio laboriosam officiis molestiae maxime repellendus beatae
            tempora sapiente! Quam!</p>

          <div className="row m-0">
            <div className="col-12 col-lg-6 p-0">
              <div className='m-2'>
                <img className='w-100 h-100 about-img-border'
                  src='https://reactclonerestaurant.vercel.app/static/media/about-chef1.0eef3922fb357d211f30.jpg' />
              </div>
            </div>
            <div className="col-12 col-lg-6 p-0">
              <div className='m-2'>
                <img className='w-100 h-100 about-img-border'
                  src='https://reactclonerestaurant.vercel.app/static/media/about-chef2.877d57410134c090c810.jpg' />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, esse nulla, debitis
            similique, ad nihil architecto maiores doloribus quis blanditiis distinctio. Praesentium,
            harum atque fuga nobis eius laboriosam totam consequuntur officia dolorem quo velit incidunt
            fugiat at maxime, molestias esse dignissimos accusantium enim debitis. Id et quidem sapiente
            adipisci dolor ipsa amet tempora porro atque perferendis. Libero odio, molestiae aliquam modi
            facere, veritatis, illo labore deserunt ducimus ipsam rem ipsum perspiciatis eveniet maiores
            excepturi. Architecto sit ducimus inventore officia porro vel? Accusantium recusandae nisi autem
            iste suscipit distinctio, libero rem.</p>
        </div>
      </section>

      {/* Image Gallery Component */}
      <ImageGallery color={'other'} />

      {/* Review Component */}
      <Review color={'white'} txtColor={'black'}/>

        {/* Footer Component */}
        <Footer />
    </>
  )
}
