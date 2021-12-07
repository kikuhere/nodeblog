const express = require("express");
const app = express();
const _ = require("lodash.kebabcase");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let blogs = [
  {
    title: "first things to do While coding..",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum fugit labore similique dolore temporibus? Aperiam quam esse unde fugiat incidunt vitae quos numquam, ab alias expedita omnis dolores est cum veritatis voluptas fuga quisquam asperiores deserunt natus, corporis sunt pariatur. Accusantium sint delectus aut modi esse, itaque beatae libero ad incidunt adipisci, suscipit perferendis, autem aspernatur dolore officia corrupti repellat quibusdam nostrum quo voluptas expedita? Similique deleniti minus dolor sequi veritatis voluptate nostrum blanditiis laborum, dicta ad excepturi adipisci sapiente? Iste quas, eveniet, natus a tempora quisquam autem quae ducimus molestias, commodi neque assumenda. Quaerat odio autem accusamus fugiat labore eaque voluptatem hic minima ratione sequi assumenda, velit obcaecati minus similique est, id nobis, soluta delectus? Voluptatum asperiores cupiditate eligendi assumenda temporibus labore itaque aperiam similique in illum quis aut soluta dolorem ullam quasi, cumque magnam quos harum debitis voluptates? Ullam, alias mollitia consequuntur doloribus similique possimus reprehenderit consequatur eligendi! dolor sit amet consectetur adipisicing elit. Harum fugit labore",
  },
  {
    title: "second things to do While coding..",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet ea sequi eligendi, ut, exercitationem error harum veritatis sapiente cupiditate dolor incidunt. Nihil blanditiis enim esse!",
  },
  {
    title: "third things to do While coding..",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident animi sit facilis possimus tempora iste ipsum assumenda! Eaque amet nobis voluptate eum, possimus voluptas corrupti placeat soluta velit aliquid perspiciatis cumque in delectus, veritatis repudiandae doloribus commodi ex sint ullam quisquam. Dolorem inventore ad optio nam dicta repellat mollitia! Velit odio perspiciatis officiis totam est ab error accusantium, molestiae doloremque repellendus nam at excepturi, quod quasi voluptates? Veniam placeat quo, saepe consequatur sed asperiores aliquid voluptatem, praesentium necessitatibus cumque dolorem impedit maxime nemo vero officiis consectetur ipsam enim excepturi suscipit! Itaque sunt dolores, ex ratione cupiditate perspiciatis, commodi, soluta iste at pariatur laudantium cum similique ut neque iure nostrum porro illo quas! Omnis quidem quibusdam cum! Placeat consequuntur itaque recusandae, cumque porro architecto magnam ab corporis similique nihil ad, assumenda eum dolorum accusamus excepturi tempora rem inventore reiciendis culpa. Aliquid similique vero deleniti laborum id distinctio, iste velit est placeat fugiat quasi veritatis ut cupiditate omnis atque voluptate animi modi corporis quos illo facilis maiores voluptates ratione sapiente. Quibusdam nobis id illo ad et vel, libero est ut nostrum. Deserunt, autem dolor. Perspiciatis labore adipisci necessitatibus exercitationem deleniti reiciendis, inventore reprehenderit odio molestias accusamus aspernatur dignissimos laboriosam architecto. Est corporis numquam earum adipisci mollitia similique! Animi minus fuga odio natus quas repellat non dignissimos voluptate possimus incidunt quasi, odit, dicta quae, a accusantium mollitia sint! Culpa, omnis, consectetur ducimus itaque expedita ea delectus quam architecto, voluptate consequatur necessitatibus accusamus in at corrupti ad ex vitae quaerat sint earum veniam laboriosam labore! Necessitatibus quas inventore magnam saepe repellendus a culpa, excepturi possimus sit, pariatur sequi totam cumque ab. Ipsam, vel debitis. Dolores facilis eveniet magni pariatur recusandae, nobis distinctio veritatis, commodi velit ex esse excepturi veniam modi nesciunt. Ad quae nulla dicta in dolore, enim et adipisci maxime, porro voluptatibus, asperiores architecto consequuntur iure. Accusamus adipisci totam eaque repellat fugiat dolorem, aliquid nulla quos quod incidunt, maxime doloremque, quasi esse laboriosam tempore facere commodi hic! Soluta, doloremque distinctio et quidem eveniet aspernatur praesentium perferendis! Odio perspiciatis quasi voluptas optio repudiandae laudantium aliquam beatae nobis quae sed, dolorum cum quam! Temporibus nulla animi asperiores distinctio consequatur excepturi molestias saepe non facilis eaque nam praesentium at magnam fuga libero, atque corrupti! Quis, tenetur quae dolorum possimus voluptates at nihil, magni reiciendis eum iusto quisquam amet nostrum deleniti veritatis omnis inventore praesentium odit autem voluptatibus soluta. Expedita laboriosam dignissimos atque soluta ex officia",
  },
  {
    title: "fourth things to do While coding..",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident animi sit facilis possimus tempora iste ipsum assumenda! Eaque amet nobis voluptate eum, possimus voluptas corrupti placeat soluta velit aliquid perspiciatis cumque in delectus, veritatis repudiandae doloribus commodi ex sint ullam quisquam. Dolorem inventore ad optio nam dicta repellat mollitia! Velit odio perspiciatis officiis totam est ab error accusantium, molestiae doloremque repellendus nam at excepturi, quod quasi voluptates? Veniam placeat quo, saepe consequatur sed asperiores aliquid voluptatem, praesentium necessitatibus cumque dolorem impedit maxime nemo vero officiis consectetur ipsam enim excepturi suscipit! Itaque sunt dolores, ex ratione cupiditate perspiciatis, commodi, soluta iste at pariatur laudantium cum similique ut neque iure nostrum porro illo quas! Omnis quidem quibusdam cum! Placeat consequuntur itaque recusandae, cumque porro architecto magnam ab corporis similique nihil ad, assumenda eum dolorum accusamus excepturi tempora rem inventore reiciendis culpa. Aliquid similique vero deleniti laborum id distinctio, iste velit est placeat fugiat quasi veritatis ut cupiditate omnis atque voluptate animi modi corporis quos illo facilis maiores voluptates ratione sapiente. Quibusdam nobis id illo ad et vel, libero est ut nostrum. Deserunt, autem dolor. Perspiciatis labore adipisci necessitatibus exercitationem deleniti reiciendis, inventore reprehenderit odio molestias accusamus aspernatur dignissimos laboriosam architecto. Est corporis numquam earum adipisci mollitia similique! Animi minus fuga odio natus quas repellat non dignissimos voluptate possimus incidunt quasi, odit, dicta quae, a accusantium mollitia sint! Culpa, omnis, consectetur ducimus itaque expedita ea delectus quam architecto, voluptate consequatur necessitatibus accusamus in at corrupti ad ex vitae quaerat sint earum veniam laboriosam labore! Necessitatibus quas inventore magnam saepe repellendus a culpa, excepturi possimus sit, pariatur sequi totam cumque ab. Ipsam, vel debitis. Dolores facilis eveniet magni pariatur recusandae, nobis distinctio veritatis, commodi velit ex esse excepturi veniam modi nesciunt. Ad quae nulla dicta in dolore, enim et adipisci maxime, porro voluptatibus, asperiores architecto consequuntur iure. Accusamus adipisci totam eaque repellat fugiat dolorem, aliquid nulla quos quod incidunt, maxime doloremque, quasi esse laboriosam tempore facere commodi hic! Soluta, doloremque distinctio et quidem eveniet aspernatur praesentium perferendis! Odio perspiciatis quasi voluptas optio repudiandae laudantium aliquam beatae nobis quae sed, dolorum cum quam! Temporibus nulla animi asperiores distinctio consequatur excepturi molestias saepe non facilis eaque nam ",
  },
];

// home route
app.get("/", (req, res) => {
  res.render("index", { allblogs: blogs });
});
// single blog item route
app.get("/blog/:title", (req, res) => {
  const urlTitle = _(req.params.title);
  blogs.forEach((blog) => {
    const blogTitle = _(blog.title);
    if (blogTitle === urlTitle) {
      res.render("singleblog", {
        blogTitle: blog.title,
        blogBody: blog.body,
      });
    }
  });
});

app.post("/", (req, res) => {
  const blogItem = { title: req.body.title, body: req.body.body };
  blogs.push(blogItem);
  res.redirect("/");
  console.log(blogid);
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started @" + process.env.PORT);
});
