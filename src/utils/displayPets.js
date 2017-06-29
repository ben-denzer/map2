import React from 'react';

const displayPets = (cats, dogs) => {
    if (cats && dogs) {
        return <span><i className="fa fa-paw"></i> Pet Friendly</span>;
    } else if (cats) {
        return <span><i className="fa fa-paw"></i> Cats Only</span>;
    } else if (dogs) {
        return <span><i className="fa fa-paw"></i> Dogs Only</span>;
    }

    return <span>No Pets Allowed</span>
};

export default displayPets;
