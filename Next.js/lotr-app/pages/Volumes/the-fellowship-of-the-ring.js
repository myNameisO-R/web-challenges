import React from "react";
import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";


function BookVolumeDetail() {
    const currentVolumeIndex =
    volumes.findIndex(( {slug})) => slug === "the-return-if-the-king"
);

}