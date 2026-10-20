"use client";
import { Component } from "react";

// Keeps a failing WebGL scene (no GPU, lost context, asset error) from taking down the page
export default class SceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(err) {
    console.warn("3D scene disabled:", err?.message);
  }

  render() {
    return this.state.failed ? this.props.fallback ?? null : this.props.children;
  }
}
