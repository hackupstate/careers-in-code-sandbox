import React from "react";
import {
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from "reactstrap";

export default class RequestForm extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h1>Request Form</h1>
						<Form>
							<FormGroup row>
								<Label htmlFor="firstName" sm={2}>
									First Name
								</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="whats da homie's first name?"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="lastName" sm={2}>
									Last Name
								</Label>
								<Col>
									<Input
										type="text"
										name="lastName"
										id="lastName"
										placeholder="whats da homie's last name?"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="email" sm={2}>
									email
								</Label>
								<Col sm={10}>
									<Input
										type="email"
										name="email"
										id="email"
										placeholder="whats da homie's email?"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="text" sm={2}>
									Text Area
								</Label>
								<Col sm={10}>
									<Input
										type="textarea"
										name="text"
										id="text"
										placeholder="describe the picture you want painted. Is it a loved one is it a cartoon is it a gift is it for decoration?"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="File" sm={2}>
									File
								</Label>
								<Col sm={10}>
									<Input type="file" name="file" id="File" />
									<FormText color="red">
										This is some placeholder block-level help text for the above
										input. It's a bit lighter and easily wraps to a new line.
									</FormText>
								</Col>
							</FormGroup>
							<FormGroup tag="fieldset" row>
								<legend className="col-form-label col-sm-2">
									Radio Buttons
								</legend>
								<Col sm={10}>
									<FormGroup check>
										<Label check>
											<Input type="radio" name="radio2" /> do you want a room or
											a wall painted?
										</Label>
									</FormGroup>
									<FormGroup check>
										<Label check>
											<Input type="radio" name="radio2" /> do you want a canvas
											painted?
										</Label>
									</FormGroup>
									<FormGroup check>
										<Label check>
											<Input type="radio" name="radio2" /> Do you want something
											not listed painted?
										</Label>
									</FormGroup>
								</Col>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}
