import React from 'react';
import { useEffect, useState } from 'react';
import styles from './branch_small.module.css';
import axios from 'axios';
import SmallClub from './component/smallClub';
import { useLocation } from 'react-router-dom';

function BranchSmall() {
    const [loading, setLoading] = useState(true);
    const [clubs, setClubs] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    const department = location.state.department;

    const getSmallClubs = async () => {
        try {
            const response = await axios.get(`http://15.164.211.56:8080/v1/clubs?department=${department}`);
            setClubs(response.data.data.clubs);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSmallClubs();
    }, []);

    if (loading) return <div>Loading...</div>;
    //if (error) return <div>Error: {error.message}</div>;

    const renderDataInRows = (data) => {
        const rows = [];
        for (let i = 0; i < data.length; i += 4) {
            const rowItems = data.slice(i, i + 4);
            rows.push(
                <div className={styles.container} key={i}>
                    {rowItems.map((club) => (
                        <SmallClub
                            key={club.clubId}
                            imageUrl={club.imageUrl}
                            clubId={club.clubId}
                            clubName={club.clubName}
                            introduction={club.introduction}
                        />
                    ))}
                </div>
            );
        }
        return rows;
    };

    return (
        <div>
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <h2 className={styles.header_title}>{department}</h2>
                </div>
                {renderDataInRows(clubs)}
            </div>
        </div>
    );
}

export default BranchSmall;
