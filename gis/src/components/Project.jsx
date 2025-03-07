import React from 'react';


const Projects = () => {
    const images = [
        { src: "photo/cyberpunk_bishkek_flipped.png", alt: "Проект 1" },
        { src: "photo/DALL·E 2025-02-24 16.25.51 - A cyberpunk-style depiction of GUM and TSUM shopping centers in Bishkek, Kyrgyzstan at night. Neon lights cover the buildings, with futuristic hologra.webp", alt: "Проект 2" },
        { src: "photo/DALL·E 2025-02-24 16.25.54 - A cyberpunk-style cityscape of Bishkek, Kyrgyzstan at night. Neon lights illuminate the streets with futuristic advertisements in Cyrillic. The skylin.webp", alt: "Проект 3" }
    ];

    return (
        <Container id="projects" className="text-center my-5">
            <h3 className="fw-bold mb-4">Наши проекты</h3>
            <Row>
                {[...Array(2)].map((_, idx) => (
                    <Col md={6} key={idx}>
                        <Carousel>
                            {images.map((img, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block w-100 rounded" src={img.src} alt={img.alt} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;
