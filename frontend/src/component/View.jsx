import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { Pagination } from "antd";

const PAGE_SIZE = 10;

function View() {
  const [data, setData] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");
  const [currentpage, setCurrentpage] = useState("");

  async function getdata() {
    let res = await axios.get("http://localhost:3010/api/img-get");
    setData(res.data.response);
  }

  useEffect(() => {
    getdata();
  }, []);

  const search = (data1) => {
    return data1.filter(
      (item) =>
        item.title.toLowerCase().includes(filterSearch) ||
        item.date.toLocaleDateString().includes(filterSearch)
    );
  };

  return (
    <div>
      <div
        className="container"
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          margin: "1rem",
        }}
      >
        <div className="p-3">
          <input
            placeholder="Search Heare"
            style={{ width: 300, margin: "2rem" }}
            onChange={(e) => setFilterSearch(e.target.value)}
          />
        </div>
        <div>
          {data &&
            search(data).map((val, index) => {
              const date = val.date;
              return (
                <div>
                  <div className="container px-4 text-center">
                    <div
                      className="row gx-5 d-flex"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <div className="col-4 text-center px-5">
                        <img
                          width={100}
                          height={100}
                          src={`http://localhost:3010/${val.image}`}
                          className="img-fluid rounded-start"
                          alt="logo"
                        />
                      </div>
                      <div className="col">
                        <div
                          style={{
                            border: "2px solid black",
                            margin: "1rem",
                            padding: "1rem",
                            borderRadius: "10px",
                            width: "60vw",
                          }}
                        >
                          <h5 className="card-title">{val.title}</h5>
                          <p className="card-text">{val.description}</p>
                          <h5 className="card-title">{val.quantity}</h5>
                          <h5 className="card-title">{val.price}</h5>
                          <h5 className="card-title">
                            {new Date(date).toLocaleDateString()}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {PAGE_SIZE > 1 && (
          <div>
            <Pagination
              total={data.length}
              showSizeChanger
              pageSize={PAGE_SIZE}
              current={currentpage}
              itemRender={(page, type) => {
                if (type === "next") {
                  return <Link>next</Link>;
                } else if (type === "prev") {
                  return <Link>pre</Link>;
                }
                if (type === "page") {
                  return <Link>{page}</Link>;
                }
              }}
              onChange={(page, pageSize) => {
                setCurrentpage(page);
                getdata();
              }}
            />
            ;
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
