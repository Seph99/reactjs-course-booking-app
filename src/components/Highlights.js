import { Row, Col, Card } from 'react-bootstrap';


export default function Highlights() {
	return (

		<Row>
			<Col xs={12} md ={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title>
							<h2>Learn From Home</h2>
						</Card.Title>

						<Card.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium porro, pariatur ducimus amet cumque, possimus. Ducimus eaque dolorum ex porro quisquam incidunt quia repellendus, doloremque sunt quo laboriosam dignissimos?
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col xs={12} md ={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title>
							<h2>Study Now, Pay Later</h2>
						</Card.Title>

						<Card.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium porro, pariatur ducimus amet cumque, possimus. Ducimus eaque dolorum ex porro quisquam incidunt quia repellendus, doloremque sunt quo laboriosam dignissimos? onsectetur adipisicing elit. Expedita praesentium porro, pariatur ducimus amet cumque, possimus. Ducimus eaque dolorum ex porro quisquam incidunt quia repellendus, doloremque sunt quo laboriosam dignissimos?
						</Card.Text>
					</Card.Body>
				</Card>
				
			</Col>

			<Col xs={12} md ={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title>
							<h2>Be Part of Our Community</h2>
						</Card.Title>

						<Card.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium porro, pariatur ducimus amet cumque, possimus. Ducimus eaque dolorum ex porro quisquam incidunt quia repellendus, doloremque sunt quo laboriosam dignissimos?
						</Card.Text>
					</Card.Body>
				</Card>
				
			</Col>
		</Row>

		)
}