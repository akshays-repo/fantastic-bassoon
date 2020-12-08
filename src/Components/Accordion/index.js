import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import './style.scss'
const brochureContent = [
	{
    id:1,
    header:"hy",
    body:"im goood"
	},
	{
    id:2,
    header:"hy",
    body:"im goood"
	},

  {
    id:3,
    header:"hy",
    body:"im goood"
	},

	{
    id:4,
    header:"hy",
    body:"im goood"
	},
	{
    id:5,
    header:"hy",
    body:"im goood"
	},
];


class Accordion extends Component {
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: 0 };
    }
    toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }
    render() {
      const { collapse} = this.state;
      return (
        <div className="container">
            {this.props.content.map(({id, header, body}) => {
              return (
                <Card style={{ marginBottom: '1rem' }} key={id}  className="card-properties border-0">
                  <CardHeader className="accordion-header " onClick={this.toggle} data-event={id}>
                  <span
									className={
                    collapse === id
											? "header-gradient-properties"
											: "header-normal-properties"
									}
								>
									<span> {header}</span>
									<span
										style={{ float: "right" }}
										className={
                      collapse === id
												? "header-gradient-properties"
												: "header-normal-properties"
										}
									>
										{collapse === id ? "+" : "-"}
									</span>
								</span>
                  </CardHeader>
                  <Collapse isOpen={collapse === id}>
                  <CardBody className="accordion-content"
									style={{ backgroundColor: "#fafafa" }}>
                 {body}
                  </CardBody>
                  </Collapse>
                </Card>
              )
            })}     
            
          </div>
      );
    }
}

export default Accordion;
