"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
    id: string;
    title: string;
    poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
    const router = useRouter();
    const onImgClick = () => {
        router.push(`/movies/${id}`);
    };
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onImgClick} />
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}
