import React from 'react';
import { style } from 'glamor';

const randomPos = () => (
  Math.floor(
    Math.random() * 100
  )
)

const styles = () => ({
  star: style({
    position: 'absolute',
    top: `${randomPos()}vh`,
    left: `${randomPos()}vw`,
    opacity: '.75',
  })
})

const Stars = () => (
  <div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
    <div className={styles().star}>*</div>
  </div>
)

export default Stars;
