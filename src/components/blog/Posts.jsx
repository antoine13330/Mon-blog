import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme, useTheme } from '@mui/material/styles';

function Posts() {
  const [testons,setTestons] = useState('test');
  const [count, setCount] = useState(1);
  return (
    <div className="home">
      <div class="container">
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)} color="primary">+</Button><Button onClick={() => setCount(Math.max(count - 1,0))}>-</Button>
        <Link to="/blog/test">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">This is a post title {testons}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Button variant="contained"  onClick={() => setTestons("blue")}>on veut du bleu</Button>
        <Link to="/blog/test1">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">This is a post title {testons}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/blog/clonernews">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">This is a post title {testons}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </Link>
      
      </div>
    </div>
  );
}

export default Posts;
