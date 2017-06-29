import React from "react";
import PropTypes from "prop-types";
import displayPets from "../../../utils/displayPets";
import displayVal from "../../../utils/displayVal";

function CommunityPreview(props) {
    const {
        allCommunityData,
        highlightedCommunity,
        toggleHighlight,
    } = props;

    const {
        address,
        beds,
        baths,
        cats,
        city,
        community_name: communityName,
        community_url: website,
        data,
        dogs,
        image,
        key: id,
        phone,
        state,
    } = allCommunityData;

    const { petText, petClass } = displayPets(cats, dogs);

    return (
        <div
            className={`community-preview-container${highlightedCommunity === id ? " highlighted" : ""}`}
            onClick={() => toggleHighlight(id)}
        >
            <div className="preview-image" style={{ backgroundImage: `url(${image})` }} />
            <div className="preview-main">
                <h3 className="preview-title">{communityName}</h3>
                <div className="preview-text preview-address">
                    {`${address} - ${city}, ${state}`}
                </div>
                <div className="preview-info">
                    <div className="preview-info-left">
                        <div className="preview-text preview-bedbath">
                            <div>
                                <div className="box dark" />
                                {displayVal("beds", beds)}
                            </div>
                            <div>
                                <div className="box dark" />
                                {displayVal("baths", baths)}
                            </div>
                        </div>
                        <div className="previes-text preview-pets">
                            <div className={`box ${petClass}`} /> {petText}
                        </div>
                    </div>
                    <div className="preview-info-right">
                        Specials
                    </div>
                </div>
            </div>
            <div className="preview-bottom">
                <div>
                    <div className="box light" /> <a href={website}>View Website</a>
                </div>
                <div>
                    <div className="box light" /> <a href={`tel:${phone}`}>{phone}</a>
                </div>
            </div>
        </div>
    );
}

CommunityPreview.defaultProps = {
    highlightedCommunity: null,
};

CommunityPreview.propTypes = {
    allCommunityData: PropTypes.object.isRequired,
    highlightedCommunity: PropTypes.number,
    toggleHighlight: PropTypes.func.isRequired,
};

export default CommunityPreview;
