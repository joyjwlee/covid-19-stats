import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";
import ReactGA from "react-ga";
import NumberFormat from "react-number-format";
import RingLoader from "react-spinners/RingLoader";

function Home() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ReactGA.initialize("UA-168262485-1");
    ReactGA.pageview(window.location.pathname + window.location.search);

    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"), // https://disease.sh/v2/all
        axios.get("https://corona.lmao.ninja/v2/countries"), // https://disease.sh/v2/countries
      ])
      .then((reponseArr) => {
        setLatest(reponseArr[0].data);
        setResults(reponseArr[1].data);
        setLoading(false);
      })
      /*
      .then(latest, countries => {
        setLatest(latest.data);
        console.log(countries.data);
      })
      */
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  const countries = filterCountries.map((data, i) => {
    const countryDate = new Date(parseInt(data.updated));
    const countryLastUpdated = countryDate.toString();

    return (
      <Card
        key={i}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases - {data.cases}</Card.Text>
          <Card.Text>Active - {data.active}</Card.Text>
          <Card.Text>Recovered - {data.recovered}</Card.Text>
          <Card.Text>Deaths - {data.deaths}</Card.Text>
          <Card.Text>Critical - {data.critical}</Card.Text>
          <Card.Text>Today's Cases - {data.todayCases}</Card.Text>
          <Card.Text>Today's Deaths - {data.todayDeaths}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>
            {data.country} last updated - {countryLastUpdated}
          </small>
        </Card.Footer>
      </Card>
    );
  });

  var queries = [
    {
      columns: 2,
      query: "min-width: 500px",
    },
    {
      columns: 3,
      query: "min-width: 1000px",
    },
  ];

  const HandleSearchBar = () => {
    ReactGA.event({
      category: "Search bar",
      action: "Click on search bar",
      label: "HOME_PAGE",
    });
  };

  return (
    <div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RingLoader size={50} color={"green"} loading={loading} />
      </div>
      <br />
      <h2 style={{ textAlign: "center" }}>COVID-19 Live Updates</h2>
      <h4 style={{ textAlign: "center" }}>Made by Jaewon Lee</h4>
      <br />
      <CardDeck>
        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            {/* <Card.Text>{latest.cases}</Card.Text> */}
            <NumberFormat
              value={latest.cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Body>
          <Card.Footer>
            <small>Last updated - {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="danger"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            {/* <Card.Text>{latest.deaths}</Card.Text> */}
            <NumberFormat
              value={latest.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Body>
          <Card.Footer>
            <small>Last updated - {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            {/* <Card.Text>{latest.recovered}</Card.Text> */}
            <NumberFormat
              value={latest.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />
          </Card.Body>
          <Card.Footer>
            <small>Last updated - {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />

      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Label>Search For a Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country Name"
            onChange={(e) => setSearchCountries(e.target.value)}
            onClick={HandleSearchBar}
          />
        </Form.Group>
      </Form>

      <Columns queries={queries}>{countries}</Columns>
    </div>
  );
}

export default Home;
