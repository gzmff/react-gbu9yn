import React, { useRef, useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const timeRef = useRef();
  const time = useRef();
  const [num, setNum] = useState(0);
  class Foo {
    static named = '_island';
    #age;
    constructor(name, age) {
      this.name = name;
      this.#age = age;
    }
    getage() {
      return this.#age;
    }
  }
  const dd = new Foo('sss', 19);
  console.log(Foo.age, dd.age, dd.getage(), Foo.named, dd.named);
  //undefined,undefined,19_island,undefined
  const Singleton = function (name) {
    this.name = name;
  };
  Singleton.instance = null;
  console.log(Singleton.instance);
  Singleton.prototype.getName = function () {
    alert(this.name);
  };
  Singleton.getInstance = function (name) {
    console.log(this.instance, 'ddd');
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  };
  const a = Singleton.getInstance('a');
  const b = Singleton.getInstance('b');
  // a.getName();
  // b.getName();
  useEffect(() => {
    console.log(num);
  }, [num]);
  useEffect(() => {
    console.log(num, 'num');
  });
  useEffect(() => {
    timeRef.current = setInterval(() => {
      if (time.current && time.current > 0) {
        time.current -= 1;
      } else {
        if (time.current === 0) {
          clearInterval(timeRef.current);
        } else {
          time.current = 10;
        }
      }
    }, 1000);
  }, []);
  const click = () => {
    for (let i = 0; i < 100; i++) {
      setNum((num) => num + 1);
    }
  };
  function compose(...funcs) {
    if (funcs.length === 0) {
      return (arg) => arg;
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce((a, b) => {
      console.warn(a);
      return (...args) => {
        debugger;
        return a(b(...args));
      };
    });
  }

  function add(a) {
    return function (b) {
      return a + b;
    };
  }

  // 得到合成后的方法
  let add6 = compose(add(1), add(2), add(3));

  console.warn(add6(10));
  return (
    <div>
      <h1 onClick={click}>{num}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
