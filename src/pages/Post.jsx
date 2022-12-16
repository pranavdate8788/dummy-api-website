import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const dateFormat = (str) => {
  let date = new Date(str);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

const Post = ({ postlist }) => {
  const { id } = useParams();
  const data = postlist?.filter((e) => e.id === id);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [data])

  return (
    <div className="max-w-4xl mx-auto px-4 mt-16 pb-4">
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <img src={item.owner.picture} className="h-12 rounded-full" />
                <div className="text-xl font-semibold tracking-wide text-orange-600">
                  <span className="capitalize">{item.owner.title}</span>.{" "}
                  {item.owner.firstName} {item.owner.lastName}
                </div>
              </div>
              <div className="text-xs text-gray-500">
                <span className="text-orange-600 font-semibold text-xl">
                  {item.likes}
                </span>{" "}
                Likes
              </div>
            </div>
            <h1 className="font-semibold text-3xl capitalize mt-4">
              {item.text}
            </h1>
            <div>
              <div className="text-gray-500 text-sm ml-2">
                {dateFormat(item.publishDate)}
              </div>
              <div className="flex flex-wrap text-xs text-orange-600">
                {item.tags.map((i) => (
                  <div
                    key={i}
                    className="px-2 py-0.5 m-0.5 rounded-full border border-orange-200 bg-orange-50"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-base sm:text-lg mt-4">
              <p className="mt-4 text-justify indent-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, dolorem fugiat placeat fuga nam optio laudantium rem
                beatae sint voluptatibus delectus omnis eos autem voluptas!
                Nulla sunt sapiente nisi alias animi a perferendis tempore ut!
                Eveniet dolorem consequuntur suscipit officiis eius, voluptas
                qui assumenda totam tempora repudiandae numquam id nihil animi
                sunt, pariatur repellendus a repellat exercitationem error
                ratione, quos voluptates ipsum necessitatibus. Facilis tenetur,
                dolores corrupti fugiat similique odio quos cumque asperiores
                eos. Voluptates, impedit. Quae cumque minus nemo doloribus rerum
                ullam, in tenetur et ex alias dolore sit esse neque delectus
                saepe animi. Beatae eveniet dolor consequatur sint.
              </p>
              <p className="mt-4 text-justify indent-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                sequi eos voluptatem vel dolor provident, illum et blanditiis! A
                esse blanditiis omnis nostrum dolorem, laboriosam pariatur
                voluptate dolore reprehenderit in dolores magnam expedita!
                Voluptate veniam corporis itaque quod libero? Possimus, eveniet
                reprehenderit dolorum quae, quo dicta ut illum rem enim, beatae
                similique eaque cum praesentium aperiam. Suscipit totam, quae
                cum numquam et vero obcaecati iure modi temporibus ab
                repudiandae fugiat iste voluptas assumenda repellat autem earum
                tempore eos, unde, ipsa reiciendis. Corporis repellat quo
                aliquid nisi rerum repudiandae eaque totam debitis optio in
                cumque maiores pariatur perspiciatis architecto incidunt
                impedit, eius facilis fuga minus atque ea suscipit deserunt?
                Quod debitis fugit beatae reprehenderit officia neque mollitia
                cum provident consequatur alias accusamus, libero quis possimus
                ipsam laudantium autem perspiciatis amet. Soluta ab quisquam
                maxime reprehenderit labore iure perferendis eos vel non id,
                laudantium dolorem quis fugiat ea officiis, quo eum illum
                provident, odit unde voluptate optio. Blanditiis enim nam neque
                deleniti eaque molestiae culpa cupiditate numquam. Repellat
                debitis, natus consequuntur error, assumenda vero dolores
                repellendus repudiandae dolorum hic quasi corporis! Magnam
                placeat, laboriosam ad eveniet, expedita dolore earum architecto
                nostrum magni quaerat harum alias odit ipsa nesciunt corrupti
                saepe. Cum, inventore.
              </p>
              <p className="mt-4 text-justify indent-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                perspiciatis molestias illo obcaecati facilis ad iste enim quas
                sequi, harum autem ratione quo esse ipsam fugit consectetur.
                Consequuntur voluptatibus id molestias quisquam aspernatur
                consequatur maxime sint iure quasi ratione? Illo accusantium
                suscipit ut veritatis libero incidunt praesentium sunt rem
                corrupti, commodi ipsa eius iure aliquid molestiae quod nihil
                laborum autem quidem reprehenderit! Sapiente corporis voluptates
                nulla eaque odit neque, eveniet ad, veniam repudiandae molestias
                praesentium, aperiam rem! Nihil ipsum expedita reprehenderit
                assumenda quas sapiente at, quasi error, rerum eligendi
                molestiae inventore quam magnam ratione ipsam molestias
                quibusdam, eius ullam eos! Minus impedit, repellendus provident
                possimus omnis labore minima voluptatum nostrum dicta nulla.
                Possimus iusto placeat accusamus id nisi exercitationem impedit
                aliquid, assumenda excepturi tempora, eligendi fugiat earum
                ullam recusandae consectetur dicta corrupti itaque beatae
                debitis. Numquam harum, a distinctio blanditiis ex obcaecati
                perspiciatis deleniti consequatur eos atque soluta. Placeat,
                qui?
              </p>
            </div>
          </div>
        ))}
      <div></div>
    </div>
  );
};

export default Post;
