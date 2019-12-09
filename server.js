const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
 * The 'express.static' middleware provides some services Express can use to
 * serve files from a directory - in this case, the 'public' subdirectory of
 * this project.
 *
 * The 'app.use' function attaches middleware to our Express application, so
 * that when the application is running, it can serve static files. In this
 * case, we mount it over the entire app: any web request that GETs a path that
 * exists in the 'public' directory will be handled by the middleware. The
 * middleware also serves the 'index.html' file in a directory (if it exists)
 * whenever a client requests the directory itself.
 *
 * The 'public' directory for this project, in turn, contains all the HTML,
 * Javascript, and CSS files needed to run a simple chat client connected to
 * this server. Accessing this server's root URL will serve 'public/index.html',
 * which contains our chat client. This gives users an easy way to connect to
 * the server and interact with other users.
 *
 * See also:
 *  - Express: Serving static files in Express
 *    https://expressjs.com/en/starter/static-files.html
 *  - Express: express.static()
 *    https://expressjs.com/en/4x/api.html#express.static
 *  - Express: Using middleware
 *    https://expressjs.com/en/guide/using-middleware.html
 *  - Express: app.use()
 *    https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static("src"));

// this is a single route, in the simplest possible format
// the simplest format is not necessarily the best one.
// this is, right now, an introduction to Callback Hell
// but it is okay for a first-level example 
app.get("/api/year/:year/district/:district", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      let year = req.params.year;
      //console.log("year: " + year);
      let district = req.params.district;
      console.log("district: " + district);
      if(year !== "" && district !== "") {
        data = data.filter(data => data.council_district === district);
        console.log(data);
        data = data.filter(data => data.fiscalyear === year);
        console.log(data);
        
        //console.log("filtering 2");
      } 
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/FY2017", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.fiscalyear === "FY2017");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/FY2018", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.fiscalyear === "FY2018");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/1", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "1");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/2", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "2");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/3", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "3");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/4", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "4");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/5", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "5");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/6", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "6");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/7", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "7");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/8", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "8");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.get("/api/9", (req, res) => {
  const baseURL =
    "https://data.princegeorgescountymd.gov/resource/9tsa-iner.json";
  fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      data = data.filter(data => data.council_district === "9");
      res.send({ data });
    })
    .catch(err => {
      console.log(err);
      res.redirect("/error");
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
