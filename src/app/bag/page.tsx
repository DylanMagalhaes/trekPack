"use client";
import { useEffect } from "react";
import AddItemForm from "../../components/AddItemForm";
import BackpackTable from "../../components/BackpackTable";
import BackpackCardList from "../../components/BackpackCardList";
import useBackpackViewModel from "../../viewmodel/useBackpackViewModel";
import PieChart from "../../components/PieChart";
import Image from "next/image";
import backpackImage from "/public/images/backpack-stuff.webp";
import WeatherForecast from "@/components/WeatherForecast";

export default function ManageBackpack() {
  const {
    items,
    setItems,
    totalWeight,
    newItemName,
    setNewItemName,
    newItemQuantity,
    setNewItemQuantity,
    newItemWeight,
    setNewItemWeight,
    newItemCategory,
    setNewItemCategory,
    addItem,
    removeItem,
    updateQuantity,
  } = useBackpackViewModel();

  useEffect(() => {
    // S'assurer que localStorage est disponible (côté client seulement)
    if (typeof window !== "undefined") {
      const storedItems = localStorage.getItem("backpackItems");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    }
  }, [setItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("backpackItems", JSON.stringify(items));
    }
  }, [items]);

  return (
    <div className="container mx-auto pb-16">
      {/* Large Image Header */}
      <div className="relative w-full h-[50vh] md:h-[60vh] mb-10">
        <Image
          src={backpackImage}
          alt="Backpack and gear"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-5xl font-bold drop-shadow-lg mb-4">
            Gérer Votre Sac de Randonnée
          </h1>
          <p className="text-white text-xl font-light tracking-wide">
            Organisez et optimisez le contenu de votre sac pour une aventure
            sans tracas.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-green-50 p-8 rounded-lg shadow-md mb-10">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-6">
          Pourquoi cette page est essentielle ?
        </h2>
        <p className="text-lg text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
          Que vous soyez un randonneur expérimenté ou que vous prépariez votre
          première aventure, bien organiser votre sac est crucial pour une
          randonnée réussie. Ajoutez, gérez et visualisez vos articles pour
          équilibrer correctement le poids de votre sac à dos. Chaque détail
          compte pour garantir que vous avez tout ce qu&apos;il vous faut sans
          surcharge inutile.
        </p>
      </div>

      <WeatherForecast />

      {/* Add Item Form */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Ajouter un Article
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Remplissez le formulaire ci-dessous pour ajouter des articles à votre
          sac. Choisissez la catégorie appropriée, indiquez la quantité et le
          poids pour un suivi précis.
        </p>
        <AddItemForm
          newItemName={newItemName}
          setNewItemName={setNewItemName}
          newItemQuantity={newItemQuantity}
          setNewItemQuantity={setNewItemQuantity}
          newItemWeight={newItemWeight}
          setNewItemWeight={setNewItemWeight}
          newItemCategory={newItemCategory}
          setNewItemCategory={setNewItemCategory}
          addItem={addItem}
        />
      </div>

      {/* Content Section */}
      {items.length > 0 ? (
        <>
          <BackpackTable
            items={items}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
          <BackpackCardList
            items={items}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
          <div className="text-right mt-4">
            <p className="text-xl font-semibold text-gray-800">
              Poids total : {totalWeight.toFixed(2)} kg
            </p>
          </div>

          {/* Pie Chart Section */}
          <div className="bg-green-0 text-black p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl text-green-900 font-semibold text-center mb-4">
              Répartition du Poids par Catégorie
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Visualisez la répartition du poids total de votre sac en fonction
              des catégories d&apos;articles pour un équilibre parfait.
            </p>
            <PieChart items={items} />
          </div>
        </>
      ) : (
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-lg"
          role="alert"
        >
          <p className="font-bold">Votre sac est vide !</p>
          <p>
            Ajoutez des articles pour commencer à organiser votre sac de
            randonnée. Optimisez la répartition du poids pour une meilleure
            efficacité.
          </p>
        </div>
      )}
    </div>
  );
}
