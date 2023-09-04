import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                UD CISC275 with React Hooks and TypeScript - Jay Patel, Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <h1>Task 3</h1>
                <img
                    src="../images/profile.jpeg"
                    alt="Picture of Goofy Luffy from One Peice"
                />
                <ol>
                    <li>Dog</li>
                    <li>Frog</li>
                    <li>Tiger</li>
                </ol>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    width: "100px",
                                    height: "100px"
                                }}
                            >
                                <p>Box 1</p>
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "brown",
                                    width: "200px",
                                    height: "200px"
                                }}
                            >
                                <p>Box 2</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
