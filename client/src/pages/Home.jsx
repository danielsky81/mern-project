import React from 'react';
import Client from '../components/Client';
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Client />
    </>
  )
}
