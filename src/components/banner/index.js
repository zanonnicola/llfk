import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import Cta from '../cta';

const Banner = ({ lng }) => (
    <section className={style.banner}>
        <div className={style.wrapper}>
            {lng === 'fr' ?
                (
                    <React.Fragment>
                        <p>Retrouvez-nous également le samedi 23 juin chez Happy Place by Vacouva (<a style={{ color: '#fc6681' }} href="https://www.google.com/maps/place/Vacouva/@47.2146419,-1.5433538,17z/data=!3m1!4b1!4m5!3m4!1s0x4805eeb8399276c5:0xe54ac076a5ce2080!8m2!3d47.2146419!4d-1.5411651">Gare Sud, 43 quai de Malakoff</a>), de 15h à 18h pour une après-midi découverte, en famille. Les places sont limitées, pensez bien à vous inscrire par mail. </p>
                        <p><strong>Nous espérons vous y voir nombreux !</strong></p>
                        <Cta text="S'inscrire" url="mailto:hello@lopenlab.com?subject=Happy Place by Vacouva" margin="35px 0 0 0" />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p>We’ll be at Happy Place by Vacouva (<a style={{ color: '#fc6681' }} href="https://www.google.com/maps/place/Vacouva/@47.2146419,-1.5433538,17z/data=!3m1!4b1!4m5!3m4!1s0x4805eeb8399276c5:0xe54ac076a5ce2080!8m2!3d47.2146419!4d-1.5411651">Gare Sud, 43 quai de Malakoff</a>) on Saturday, 23rd June for an afternoon of discoveries for the whole family. We can only accomodate a certain number of people, so please make sure you register for the event.</p>
                        <p><strong>We look forward to meeting you there!</strong></p>
                        <Cta text="Sign up" url="mailto:hello@lopenlab.com?subject=Happy Place by Vacouva" margin="35px 0 0 0" />
                    </React.Fragment>
                )}
        </div>
    </section>
);

Banner.propTypes = {
    lng: PropTypes.string.isRequired
}

export default Banner;
