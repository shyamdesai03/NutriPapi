import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from '/src/css/signup_follow.module.css';
import axios from "axios";
import {useRouter} from "next/router";


const SignupPage = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        gender: '',
        goals: '',
        weekly_physical_activity: '',
        birthday: '1990-01-01',
        current_weight: '',
        target_weight: '',
        height: '',
        dietary_restriction: ''
    });
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = 'http://localhost:8000/signup_follow/';
        try {
            const response = await axios.post(url, formData, { withCredentials: true });
            console.log(response.data);
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            const redirectPage = '/refrigerator' // Temporary redirect to refrigerator page
            router.push(redirectPage);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error during authentication', error.message);
            } else {
                console.error('An unexpected error occurred', error);
            }
        }


        console.log(formData);
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.card}>
                <h1 className={styles.title}>Complete Your Personal Info</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className={styles.inputField}
                        required
                    />

                    <label htmlFor="gender" className={styles.label}>Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={styles.selectField}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="goals" className={styles.label}>Your Goals</label>
                    <select
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        className={styles.selectField}
                        required
                    >
                        <option value="">Select Your Goal</option>
                        <option value="health">Stay Healthy</option>
                        <option value="weight">Lose Weight</option>
                        <option value="muscle">Gain Muscle</option>
                        <option value="energy">Get Energized</option>
                    </select>

                    <label htmlFor="activityLevel" className={styles.label}>Activity Level</label>
                    <select
                        id="weekly_physical_activity"
                        name="weekly_physical_activity"
                        value={formData.weekly_physical_activity}
                        onChange={handleChange}
                        className={styles.selectField}
                        required
                    >
                        <option value="">Select Activity Level</option>
                        <option value="1">Sedentary</option>
                        <option value="2">Light Activity</option>
                        <option value="3">Moderate Activity</option>
                        <option value="4">Active</option>
                        <option value="5">Very Active</option>

                    </select>

                    <label htmlFor="birthday" className={styles.label}>Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        className={styles.inputField}
                        required
                    />

                    <label htmlFor="currentWeight" className={styles.label}>Current Weight (kg)</label>
                    <input
                        type="number"
                        id="current_weight"
                        name="current_weight"
                        value={formData.current_weight}
                        onChange={handleChange}
                        className={styles.inputField}
                        step="1"
                        required
                    />

                    <label htmlFor="targetWeight" className={styles.label}>Target Weight (kg)</label>
                    <input
                        type="number"
                        id="target_weight"
                        name="target_weight"
                        value={formData.target_weight}
                        onChange={handleChange}
                        className={styles.inputField}
                        step="1"
                        required
                    />

                    <label htmlFor="height" className={styles.label}>Height (cm)</label>
                    <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className={styles.inputField}
                        step="1"
                        required
                    />

                    <label htmlFor="dietaryPreferences" className={styles.label}>Dietary Preferences</label>
                    <select
                        id="dietary_restriction"
                        name="dietary_restriction"
                        value={formData.dietary_restriction}
                        onChange={handleChange}
                        className={styles.selectField}
                        required
                    >
                        <option value="">Select Dietary Preference</option>
                        <option value="none">None</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="keto">Ketogenic</option>
                        <option value="paleo">Paleo</option>
                        <option value="lowcarb">Low Carb</option>
                        <option value="lowfat">Low Fat</option>
                    </select>

                    <button type="submit" className={styles.button}>Continue</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;