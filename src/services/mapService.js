/* eslint-disable */
const getCoords = community => ({ lat: community.lat, lng: community.lng });
import displayVal from "../utils/displayVal";

let map;

function initMap(options, highlightedCommunity, toggleHighlight) {
    const initialSettings = {
        filteredData: [],
        center: {
            lat: 39,
            lng: -94,
        },
        zoom: 5,
    };

    let highlightOverride;
    if (highlightedCommunity) {
        // settings override if highlighted
        const community = options.filteredData.filter(a => {
            if (a.key === highlightedCommunity) return a;
        })[0];
        if (community) {
            const center = { lat: community.lat, lng: community.lng };
            const zoom = 15;
            highlightOverride = { center, zoom };
        }
    }

    const settings = Object.assign(initialSettings, options, highlightOverride);
    const { filteredData, center, zoom } = settings;

    map = new window.google.maps.Map(document.getElementById("map"), {
        zoom,
        center,
        scrollwheel: false,
    });

    // don't show infowindow for other places
    map.addListener("click", (ev) => {
        if (ev.placeId) {
            ev.stop();
        }
    });

    const markers = filteredData.map(location => (
        new window.google.maps.Marker({
            position: getCoords(location),
            icon: "/gridmedia/img/map-pin.png",
            allData: location,
        })
    ));

    const allInfoWindows = [];

    markers.forEach((a) => {
        const {
            address,
            community_name: communityName,
            beds,
            city,
            image,
            key,
            state,
            community_url: website,
        } = a.allData;

        let infoWindowBeds = "";
        if (beds.length === 1) {
            if (beds[0].toString() === "1") {
                infoWindowBeds = "1 Bedroom";
            } else {
                infoWindowBeds = `${beds[0]} Bedrooms`;
            }
        } else {
            infoWindowBeds = displayVal("beds", beds);
        }

        const infoWindowContent = `
            <div class="info-window">
                <div class="info-left">
                    <img src=${image} alt=${communityName} />
                </div>
                <div class="info-right">
                    <h3>${communityName}</h3>
                    <div>
                        <div class="box dark"></div>
                        ${address} - ${city}, ${state}
                    </div>
                    <div>
                        <div class="box dark"></div>
                        ${infoWindowBeds}
                    </div>
                    <a href="${website}" target="_blank">${website}</a>
                </div>
            </div>
        `;

        const infoWindow = new window.google.maps.InfoWindow({ content: infoWindowContent });

        allInfoWindows.push(infoWindow);

        a.addListener("click", () => {
            allInfoWindows.forEach(b => b.close());
            toggleHighlight(key);
            infoWindow.open(map, a);
        });

        if (key === highlightedCommunity) {
            infoWindow.open(map, a);
        }
    });

    // Add a marker clusterer to manage the markers.
    new window.MarkerClusterer( // eslint-disable-line
        map,
        markers,
        {
            styles: [{
                url: "/gridmedia/img/m1.png",
                height: 60,
                width: 60,
                textColor: "white",
                textSize: 12,
                backgroundPosition: "center",
            }],
        },
    );
}

export { initMap, map };
