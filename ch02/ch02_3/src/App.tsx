import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="http://www.naver.com" text="naver" />
        <ArrowComponent href="http://www.google.com" text="google" />
      </ul>
    );
  }
}
