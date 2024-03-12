import React from 'react'
import { useTheme } from '../../contextAPI/ThemeContext'

export default function About() {
  const{darkMode}=useTheme()
  return (
    <main className={`${darkMode?'darkMode':'lightMode'}`}>
      <h1>About page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officia fuga similique reiciendis obcaecati praesentium culpa maxime sunt! Adipisci reprehenderit fuga nostrum consequuntur nisi rerum, neque debitis odio consequatur commodi?
      Recusandae vitae harum earum nobis quibusdam, at reprehenderit esse quo voluptates ad consequuntur voluptatum impedit unde maxime saepe ab eius debitis officia porro quasi aliquid laboriosam incidunt facilis nisi? Pariatur?
      Debitis ipsa voluptate assumend
      a? Nulla vel sunt at nobis illo. Placeat optio possimus expedita laborum harum voluptatem quasi ad? Odit eveniet autem repellat quas nam rem recusandae natus incidunt nihil!
      Culpa doloremque neque obcaecati similique minus fugiat consequuntur quas quisquam dolorum molestias, fugit dolore? Accusamus ipsum quam optio, fugit accusantium vitae consequatur itaque adipisci quidem sint numquam laudantium delectus asperiores.
      Natus magnam, et blanditiis temporibus mollitia magni in esse error deserunt aliquam, excepturi incidunt veniam labore rem, veritatis atque placeat cumque explicabo laborum hic fugiat! Beatae, alias ea? Saepe, nam.
      Enim cumque architecto autem, reiciendis magni consequuntur perferendis neque praesentium soluta voluptatem blanditiis sunt necessitatibus totam illo assumenda ut sed repellendus voluptates iste iure repellat. Libero et dignissimos ex quia.
      Harum fugit officia distinctio. Rerum ducimus impedit possimus aliquam distinctio quasi asperiores error veniam inventore dolorem repellat, laboriosam, reiciendis tempore qui placeat ad omnis facilis dignissimos ex quisquam saepe consectetur.
      Placeat fugit doloribus sint expedita ex repellat veritatis, recusandae repellendus officia porro et vel praesentium aut, non explicabo necessitatibus. Ullam id sunt tempore commodi nobis cupiditate adipisci, sequi similique odit?
      Excepturi officia esse reiciendis, cumque natus praesentium necessitatibus maiores odit quia vero velit quidem mollitia fugit cum voluptatum non impedit perferendis ipsa nihil nobis consectetur dolore optio? Dignissimos, error amet?
      Veniam ullam cumque vitae illo doloribus omnis adipisci voluptas voluptatem eveniet, officiis consequatur facilis laborum dignissimos? Aliquam quibusdam numquam doloribus molestiae assumenda distinctio eum molestias, soluta modi sint a! Enim.</p>
    </main>
  )
}
