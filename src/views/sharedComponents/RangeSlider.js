import React, { Component } from "react";
import PropTypes from "prop-types";
import noUiSlider from "nouislider";

class RangeSlider extends Component {
    componentDidMount() {
        const { handleSliderChange, id, margin, max, min, step } = this.props;

        const slider = document.getElementById(this.props.id);

        noUiSlider.create(
            slider,
            {
                start: [min, max],
                connect: [false, true, false],
                range: {
                    min,
                    max,
                },
                margin,
                tooltips: [true, true],
                format: {
                    to: val => parseInt(val.toString(), 10),
                    from: val => val,
                },
                step,
            },
        );
        slider.noUiSlider.on("end", () => {
            handleSliderChange(id, slider.noUiSlider.get());
        });
    }

    render() {
        const { id, label } = this.props;
        return (
            <div className="slider-container">
                <div className="slider-label">{label}</div>
                <div id={id} />
            </div>
        );
    }
}

RangeSlider.propTypes = {
    handleSliderChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
};

export default RangeSlider;
