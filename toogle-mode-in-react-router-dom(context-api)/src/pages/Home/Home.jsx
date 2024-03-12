import React from 'react'
import { useTheme } from '../../contextAPI/ThemeContext'

export default function Home() {
  const {darkMode}=useTheme()
  return (
    <main className={`${darkMode?'darkMode':'lightMode'}`}>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ipsa pariatur eaque rem voluptatibus sapiente incidunt optio aspernatur fugiat culpa. Fugiat, pariatur! Corporis nam ad, officiis ut deserunt nisi animi.
      Eligendi error beatae quos placeat dolor cupiditate alias adipisci minus officiis qui veniam laudantium velit maiores, fuga, esse quod doloremque earum, odio perferendis consequuntur possimus. Blanditiis quos placeat debitis ipsam.
      Voluptate ex harum amet provident, vitae ab nisi quo, laudantium minima et cum eos rem voluptatem atque. Laboriosam, labore, corporis ullam libero quaerat, odio alias ratione neque iusto velit excepturi.
      Repudiandae ut velit eos atque quasi expedita nostrum, harum beatae. Ut magni fugiat provident saepe sint consequuntur a quae, vitae obcaecati, voluptate dignissimos sed. Cum laboriosam ipsam odit ducimus quisquam.
      Maxime neque modi, sunt laudantium vero suscipit accusantium asperiores debitis provident tempora eum. Omnis natus atque fugiat impedit voluptatibus eos quo, repellendus veniam. Nisi, architecto reprehenderit repellendus laborum voluptatum rem.
      Doloremque, possimus adipisci. Eius repellendus placeat a sequi, veniam officiis pariatur repellat. Perferendis vitae accusantium error voluptatum ab, quam minima modi quas, reprehenderit et repudiandae porro iure, voluptatem ipsum reiciendis!
      Tempora fugiat maxime quaerat, et illo blanditiis iste earum recusandae ut repellat laudantium. Sequi consequuntur maiores commodi qui quos facere minus et. Nisi explicabo fugiat, cum placeat provident esse quidem.
      Laudantium possimus molestias perspiciatis doloribus soluta nobis quae facilis quos fuga animi iure, earum, itaque voluptatem sunt architecto magni optio consequatur fugit dicta vel eius minima ad nostrum alias. Aliquam.
      Nobis ducimus quisquam sed cumque officia reiciendis, alias rem sint rerum consequatur, deserunt dolorum tenetur quis dicta aliquam minus enim mollitia magni sapiente voluptate eum maiores magnam unde. Deserunt, itaque.
      Fugit voluptates ab enim, repellat eligendi tenetur repellendus reprehenderit harum ex libero facere consequatur, tempore molestiae expedita omnis, optio illum. Voluptatibus earum autem recusandae voluptate eligendi nesciunt praesentium inventore aperiam.</p>
    </main>
  )
}
