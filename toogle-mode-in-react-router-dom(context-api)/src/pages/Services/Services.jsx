import React from 'react'
import { useTheme } from '../../contextAPI/ThemeContext'

export default function Services() {
  const {darkMode}=useTheme()
  return (
    <main className={`${darkMode?'darkMode':'lightMode'}`}>
      <h1>Services Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum illo iure aliquam numquam sapiente? Mollitia sequi optio aliquam illo nesciunt rerum, corrupti repellat quidem molestias assumenda, accusamus dolorem nostrum!
      Dolore magni molestiae itaque, culpa quis id labore quas sed debitis hic, ullam laudantium. Praesentium quidem cum ad placeat nobis optio, mollitia eius hic a omnis, dolores unde explicabo minima?
      Architecto error labore repellendus, doloribus iusto necessitatibus ad ut, nulla tenetur repudiandae aliquid optio eligendi enim veritatis, quos quas excepturi mollitia. Veritatis voluptas aut modi architecto eius quia ad asperiores?
      Magni repellendus natus repudiandae error atque eaque quidem dolor voluptatibus totam tempora repellat dolorem minima quaerat ipsa velit similique tempore facilis facere, reprehenderit ea consequatur molestiae dolore voluptatem blanditiis! Consequatur?
      Nobis, asperiores? Quas ut itaque impedit quidem nihil corporis, repellendus quod, nulla et suscipit iusto, ex odio? Non fuga, eaque nobis voluptatum doloremque consequuntur eum dolores quo omnis! Modi, doloremque!
      In placeat odit fugit ratione amet quidem. Placeat minus iusto accusantium officiis inventore eligendi molestias, explicabo modi et est quae aut hic ut ea commodi! Non, veniam quidem. Nisi, corporis?
      Minima pariatur magni nobis repudiandae quae eius illum quas assumenda, fugit dolor labore, voluptate tempore placeat quisquam mollitia qui modi autem similique. Amet, nemo consequuntur quaerat fugiat hic similique quasi.
      Ad obcaecati ex explicabo architecto vel vero deserunt odit. Reiciendis aut voluptate suscipit autem doloremque, sequi doloribus aperiam laudantium excepturi! Saepe dicta nesciunt, laudantium reprehenderit exercitationem rem in labore iusto?
      Provident iure, nam velit ab molestias, impedit, nobis error eaque natus dolores inventore hic? Labore fugiat commodi, corrupti fugit expedita illum vitae tempora odio, odit impedit soluta asperiores repellat sapiente.
      Rem perferendis quod quos veritatis? Magnam, rem sequi. Impedit, ipsa ab tempore cupiditate quibusdam ducimus recusandae, nisi id officiis consectetur natus laboriosam et voluptatibus enim sunt beatae temporibus, eaque itaque.</p>
    </main>
  )
}
