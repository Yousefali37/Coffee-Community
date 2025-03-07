import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FilterBar.module.css";
import PropTypes from "prop-types";

function FilterBar({ onFilterChange, onSearchChange }) {
    // تحديث الفلتر عند تغيير القيمة
    const handleMethodChange = (e) => {
        onFilterChange("method", e.target.value);
    };

    const handleLevelChange = (e) => {
        onFilterChange("level", e.target.value);
    };

    // تحديث نص البحث
    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <div className="container-fluid my-3">
            <div className="row g-2 justify-content-around align-items-center">
                {/* Filters Section */}
                <div className="col-auto d-flex align-items-center gap-2">
                    <FontAwesomeIcon icon={faFilter} className={styles.filterIcon} />

                    <select
                        name="method"
                        id="method"
                        className="form-select form-select-sm"
                        onChange={handleMethodChange}
                    >
                        <option value="">All Methods</option>
                        <option value="pour over">Pour Over</option>
                        <option value="espresso">Espresso</option>
                        <option value="french press">French Press</option>
                        <option value="cold brew">Cold Brew</option>
                        <option value="aeropress">AeroPress</option>
                    </select>

                    <select
                        name="level"
                        id="level"
                        className="form-select form-select-sm"
                        onChange={handleLevelChange}
                    >
                        <option value="">All Levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>

                {/* Search Section */}
                <div className="col-auto">
                    <form className="input-group input-group-sm">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

FilterBar.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
};

export default FilterBar;