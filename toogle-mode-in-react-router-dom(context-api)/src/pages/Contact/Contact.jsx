import React from 'react'
import { useTheme } from '../../contextAPI/ThemeContext'

export default function Contact() {
    const {darkMode}=useTheme();
  return (
    <main className={`${darkMode?'darkMode':'lightMode'}`}>
      <h1>Contact Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae natus assumenda porro voluptates ducimus ab maiores eum! Facilis praesentium perspiciatis voluptatum illum at atque ullam ipsam expedita ipsum optio!
      Quos molestias ratione nesciunt saepe tempora voluptatem? Omnis laudantium repellat, perferendis debitis molestiae at dolorum recusandae accusantium nobis, officia, atque corporis! Laborum aut maiores sed itaque quibusdam ad tempora adipisci?
      Ab dignissimos tempore numquam necessitatibus eos. Nesciunt temporibus quod voluptates deleniti aspernatur obcaecati tenetur odio repudiandae architecto ipsam, doloribus aliquid assumenda, totam sint perspiciatis ratione excepturi. Cumque rem facilis voluptas.
      Doloribus, recusandae dolor quaerat cumque nostrum modi totam in eligendi, obcaecati blanditiis consequatur quibusdam ipsa, ipsum voluptates rerum illo necessitatibus ea. Alias necessitatibus quae optio rerum laborum! Id, totam perspiciatis?
      Provident voluptas aperiam, ipsum, nulla libero quisquam vero quos est unde illum sequi quaerat perferendis. Rerum accusamus repellendus, similique dolor voluptates expedita delectus doloribus voluptate, minima beatae modi eius quis.
      Odio minus quas modi dolores, numquam magnam quia commodi molestias aperiam possimus corrupti veniam aliquid consequatur nobis eligendi laboriosam corporis accusamus, rerum consequuntur ea. Repudiandae neque sit sapiente recusandae explicabo?
      Accusantium distinctio eligendi et quasi provident culpa minima neque voluptatum nisi nemo, tenetur, ullam perspiciatis enim vel illum deserunt laborum nam ducimus doloribus ratione aperiam omnis! Eligendi delectus sunt cumque.
      Commodi totam odit ut at qui esse dolorum? Magnam veritatis harum perferendis dicta asperiores itaque consequatur obcaecati animi optio ad, modi, dignissimos quia qui. Excepturi sed officia cumque nam facere!
      Amet possimus numquam architecto iure nihil! Esse necessitatibus adipisci tempora corrupti dolores ipsum mollitia, eveniet reiciendis delectus voluptates corporis facilis dicta ad. Cum reprehenderit quam et laudantium. Nam, laudantium ullam!
      Numquam, repellat voluptates. Aperiam ullam dicta eveniet nisi dolorum eaque vitae nesciunt non velit aut saepe incidunt voluptatum consectetur, accusantium sint veritatis voluptatibus placeat. Voluptates at reiciendis maiores magnam tempora.</p>
    </main>
  )
}
